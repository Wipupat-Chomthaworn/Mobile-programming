# from moviepy.editor import VideoFileClip
# import speech_recognition as sr

# def extract_audio(video_path, audio_output_path):
#     video_clip = VideoFileClip(video_path)
#     audio_clip = video_clip.audio
#     audio_clip.write_audiofile(audio_output_path)
#     print("extract")

# def generate_transcript(audio_path, language="th-TH"):
#     recognizer = sr.Recognizer()
#     with sr.AudioFile(audio_path) as source:
#         audio = recognizer.record(source)
#         try:
#             # transcript = recognizer.recognize_google(audio, language=language)
#             transcript = recognizer.recognize_sphinx(audio)

#             return transcript
#         except sr.UnknownValueError:
#             return "Could not understand audio"
#         except sr.RequestError as e:
#             return f"Error requesting results from Google Speech Recognition: {e}"

# if __name__ == "__main__":
#     video_path = "./HID interview.mp4"  # Replace with your Thai video's path
#     audio_output_path = "audio.wav"
    
#     extract_audio(video_path, audio_output_path)
#     transcript = generate_transcript(audio_output_path)
    
#     print("Video Transcript:")
#     print(transcript)


from moviepy.editor import VideoFileClip
import speech_recognition as sr

def extract_audio(video_path, audio_output_path):
    video_clip = VideoFileClip(video_path)
    audio_clip = video_clip.audio
    audio_clip.write_audiofile(audio_output_path)

def generate_transcript(audio_path, language="th-TH"):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio = recognizer.record(source)
        try:
            transcript = recognizer.recognize_google(audio, language=language)
            return transcript
        except sr.UnknownValueError:
            return "Could not understand audio"
        except sr.RequestError as e:
            return f"Error requesting results: {e}"

if __name__ == "__main__":
    video_path = "./HID interview.mp4"  # Replace with the path to your Thai video
    audio_output_path = "audio.wav"
    
    extract_audio(video_path, audio_output_path)
    transcript = generate_transcript(audio_output_path)
    
    print("Video Transcript:")
    print(transcript)
