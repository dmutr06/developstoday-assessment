"use client";

import Button from "./ui/Button";


export default function GoBackButton() {
    return (
        <Button onClick={() => {
            window.history.back();
        }}>Go Back</Button>
    );
}
