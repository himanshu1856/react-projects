import { useEffect, useState } from "react";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(6);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numAllowed, setNumAllowed] = useState(false);

    const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numStr = "0123456789";
    const charStr = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    useEffect(() => {
        passGenerator();
    }, [length, charAllowed, numAllowed]);

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        alert("Password Copied!!")
    };

    const passGenerator = () => {
        let passString = s;
        let ans = "";

        passString += charAllowed ? charStr : "";
        passString += numAllowed ? numStr : "";

        for (let i = 1; i <= length; i++) {
            const randomIdx = Math.trunc(Math.random() * passString.length);
            ans += passString.charAt(randomIdx);
        }

        setPassword(ans);
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-225 bg-rose-200 p-10 rounded-[30px] border-2 border-black shadow-lg">
                {/* Top Section */}
                <div className="flex items-center gap-6 mb-12">
                    <input
                        type="text"
                        placeholder="Generated password"
                        readOnly
                        value={password}
                        className="flex-1 px-6 py-5 rounded-[25px] bg-yellow-200 border-2 border-black text-lg outline-none"
                    />

                    <button
                        onClick={handleCopy}
                        className="px-10 py-5 rounded-[25px] bg-blue-300 border-2 border-black text-lg hover:scale-105 active:scale-95 transition"
                    >
                        Copy
                    </button>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                    {/* Length */}
                    <div className="flex items-center gap-5">
                        <input
                            type="range"
                            min="6"
                            max="30"
                            onChange={(event) => {
                                setLength(parseInt(event.target.value));
                            }}
                            className="cursor-pointer"
                        />
                        <span className="text-lg font-medium">
                            Length ({length})
                        </span>
                    </div>

                    {/* Numbers */}
                    <label className="flex items-center gap-3 cursor-pointer text-lg">
                        <input
                            type="checkbox"
                            className="w-6 h-6"
                            onChange={(e) => {
                                setNumAllowed(e.target.checked);
                            }}
                        />
                        Numbers
                    </label>

                    {/* Characters */}
                    <label className="flex items-center gap-3 cursor-pointer text-lg">
                        <input
                            type="checkbox"
                            className="w-6 h-6"
                            onChange={(e) => {
                                setCharAllowed(e.target.checked);
                            }}
                        />
                        Characters
                    </label>
                </div>
            </div>
        </div>
    );
}
