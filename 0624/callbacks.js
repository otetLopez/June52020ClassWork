function useCallBack(func_to_call) {
    func_to_call(1);
    func_to_call(2);
    func_to_call(3);
}

function callback_func(sentence) {
    console.log(sentence);
}

useCallBack(callback_func);