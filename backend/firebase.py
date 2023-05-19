import pyrebase
firebaseConfig = {
    'apiKey': "AIzaSyArKFFDqMwXZR1QCCJvBmcOUn0ajIISs3Y",
    'authDomain': "suparna-7dd6e.firebaseapp.com",
    'databaseURL': "https://suparna-7dd6e-default-rtdb.firebaseio.com",
    'projectId': "suparna-7dd6e",
    'storageBucket': "suparna-7dd6e.appspot.com",
    'messagingSenderId': "292555253504",
    'appId': "1:292555253504:web:63ad4c6273dffd7f6eb5e5"
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()
auth = firebase.auth()
storage = firebase.storage()

def upload_firebase():
    filename = input("Enter file name: ")
    cloudfilename = input("Enter file name to store in cloud: ")
    storage.child(cloudfilename).put(filename)

def download_firebase():
    filenm = input("Enter file name: ")
    cloudfilename = rf"C:\Users\DELL\Desktop\imgs\{filenm}"
    storage.child(filenm).download("", "downloaded.txt")
    return cloudfilename
    # upload_firebase()
