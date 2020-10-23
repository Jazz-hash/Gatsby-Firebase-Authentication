import { FirebaseError as FBError } from 'firebase'
export type AuthError = FBError & Error
