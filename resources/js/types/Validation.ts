export default interface ValidationState {
    $dirty: false, // validations will only run when $dirty is true
    $touch: Function, // call to turn the $dirty state to true
    $reset: Function, // call to turn the $dirty state to false
    $errors: [], // contains all the current errors { $message, $params, $pending, $invalid }
    $error: false, // true if validations have not passed
    $invalid: false, // as above for compatibility reasons
}