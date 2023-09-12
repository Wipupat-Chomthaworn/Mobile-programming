from google.cloud import speech_v1p1beta1 as speech
from pydub import AudioSegment
import io

# Replace 'your-credentials.json' with the path to your API credentials JSON file.
credentials_path = 'your-credentials.json'

# Replace 'your-video-file.mp4' with the path to your video file.
video_file_path = 'your-video-file.mp4'

def extract_audio_from_video(video_file):
    audio = AudioSegment.from_file(video_file)
    audio.export('extracted_audio.flac', format='flac')
    return 'extracted_audio.flac'

def transcribe_audio(audio_file):
    client = speech.SpeechClient.from_service_account_json(credentials_path)

    with io.open(audio_file, 'rb') as audio_file:
        content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code='en-US',
    )

    response = client.recognize(config=config, audio=audio)

    sentences = []
    for result in response.results:
        # Extract individual sentences from recognized text (this is a basic example).
        for sentence in result.alternatives[0].transcript.split('.'):
            sentences.append(sentence.strip())

    return sentences

if __name__ == '__main__':
    audio_file_path = extract_audio_from_video(video_file_path)
    extracted_sentences = transcribe_audio(audio_file_path)
    for idx, sentence in enumerate(extracted_sentences):
        print(f"Sentence {idx+1}: {sentence}")
