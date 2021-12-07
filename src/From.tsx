import React from "react";
import { useState } from "react";

function Form() {
    const [value, setValue] = useState("");
    // envet에 타입주는 방법 => 안에 내용은 자주 사용하면 익숙해지고 구글링을 통해서 알아내자
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="username"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Form;