import { useRef, useEffect, useState } from "react";

export function CarDetails({ initialData }) {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            formRef.current.reset();
        }
    }, [initialData]);

    const handleSubmit = () => {

    };

    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            Model:
            <input type="text" name="model" defaultValue={initialData.model} />
            <br />
            Year:
            <input type="text" name="year" defaultValue={initialData.year} />
            <br />
            Color:
            <input type="text" name="color" defaultValue={initialData.color} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
