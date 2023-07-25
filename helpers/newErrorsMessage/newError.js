const EmailnotValid = new Error("Email that user entered is not valid")
const EmailAlreadyExist = new Error("Email user has been already registered")
const UsernameAlreadyExist = new Error("Username has been already exist")
const VideoDoesntExist = new Error("Video doesn't exist")
const UserDoesntExist = new Error("User Doesn't exist")

export default {
    EmailnotValid,
    EmailAlreadyExist,
    UsernameAlreadyExist,
    VideoDoesntExist,
    UserDoesntExist
}