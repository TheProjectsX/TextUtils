import React, { useState } from 'react';

export default function TextUtil() {
    const [value, setValue] = useState("");
    const [output, setOutput] = useState("");

    const [process, setProcess] = useState("default");

    const getWordLength = (text) => {
        let noSpaceText = text.split(" ").filter((element) => element !== "").join(" ") // W/O spaces
        let noNewLine = noSpaceText.split("\n").filter((element) => element !== "").join(" ") // W/O new lines
        let wordLength = noNewLine.split(" ").length

        return wordLength
    }

    const handelPaste = () => {
        navigator.clipboard.readText()
            .then(data => {
                setValue(data);
            })
            .catch(error => {
                
            });
    }

    const copyText = () => {
        navigator.clipboard.writeText(output)
    }

    const toUpperCase = () => {
        setOutput(value.toUpperCase());
    }

    const toLowerCase = () => {
        setOutput(value.toLowerCase());
    }

    const toCapitalize = () => {
        let textList = value.split(" ");
        for (let i = 0; i < textList.length; i++) {
            let word = textList[i]
            textList[i] = word !== "" ? word[0].toUpperCase() + word.slice(1) : ""
        }

        setOutput(textList.join(" "))
    }

    const removeExtraSpaces = () => {
        let textList = value.split(" ");
        let newList = textList.filter((element) => element !== "")
        setOutput(newList.join(" "))
    }

    const removeLineBreaks = () => {
        let textList = value.split("\n");
        let newList = textList.filter((element) => element !== "")
        setOutput(newList.join(" "))
    }

    const removeBlankLines = () => {
        let textList = value.split("\n");
        let newList = textList.filter((element) => element !== "")
        setOutput(newList.join("\n"))
    }

    const removeNumbers = () => {
        let textList = value.split("");
        let newList = textList.filter((element) => { return isNaN(parseFloat(element)) })
        setOutput(newList.join(""))

    }

    const extractNumers = () => {
        let textList = value.split("");
        let newList = textList.filter((element) => { return !isNaN(parseFloat(element)) && isFinite(element) })
        setOutput(newList.join(""))
    }

    const reverseText = () => {
        let newText = value.split("").reverse().join("");

        setOutput(newText)
    }

    const upsideDownText = () => {
        const upsideDownChars = { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ı', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z', A: '∀', B: 'q', C: 'Ɔ', D: 'p', E: 'Ǝ', F: 'Ⅎ', G: 'פ', H: 'H', I: 'I', J: 'ſ', K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Q', R: 'ɹ', S: 'S', T: '┴', U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z', ɐ: "a", q: "b", ɔ: "c", p: "d", ǝ: "e", ɟ: "f", ƃ: "g", ɥ: "h", ı: "i", ɾ: "j", ʞ: "k", l: "l", ɯ: "m", u: "n", o: "o", d: "p", b: "q", ɹ: "r", s: "s", ʇ: "t", n: "u", ʌ: "v", ʍ: "w", x: "x", ʎ: "y", z: "z", A: "∀", B: "𐐒", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H", I: "I", J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z", ' ': ' ' };

        let flippedText = "";
        for (let i = 0; i < value.length; i++) {
            let char = value[i];
            flippedText += upsideDownChars[char];
        }

        setOutput(flippedText);
    }


    const executeProcess = () => {
        if (process === "uppercase") {
            toUpperCase();
        } else if (process === "lowercase") {
            toLowerCase();
        } else if (process === "capitalize") {
            toCapitalize();
        } else if (process === "removeExtraSpaces") {
            removeExtraSpaces();
        } else if (process === "removeLineBreaks") {
            removeLineBreaks();
        } else if (process === "removeBlankLines") {
            removeBlankLines();
        } else if (process === "removeNumers") {
            removeNumbers();
        } else if (process === "extractNumers") {
            extractNumers();
        } else if (process === "reverseText") {
            reverseText();
        } else if (process === "upsideDownText") {
            upsideDownText();
        }

        setProcess("default")
    }

    return (
        <>
            <div className="contaier d-flex flex-column justify-content-center align-items-center">
                <div style={{ width: "min(600px, 75%)" }}>
                    <h2 className="m-4 text-center">Enter Your Text to Process</h2>
                    <textarea className="form-control border-2 p-3" placeholder="Enter Text Here" style={{ height: "200px", resize: "none", fontSize: "15px" }} onChange={(e) => { setValue(e.target.value); setOutput(e.target.value) }} value={value}></textarea>

                    <div className="mt-2 mx-2" style={{ fontSize: "14px" }}>
                        <p className="m-0">{value === "" ? 0 : getWordLength(value)} Words, {value === "" ? 0 : value.length} Charecters, {value === "" ? 0 : value.split("\n").length} Lines. {value === "" ? 0 : getWordLength(value) * 0.008} Minutes Read</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center my-3 flex-wrap gap-3">
                        <div className="d-flex justify-content-evenly align-items-center gap-2">
                            <button type="button" className="btn btn-outline-warning border-2 fw-bold btn-sm" onClick={handelPaste}>Paste</button>
                            <button type="button" className="btn btn-outline-danger border-2 fw-bold btn-sm" onClick={() => { setValue(""); setOutput(""); setProcess("default") }}>Clear</button>
                            <button type="button" className="btn btn-outline-info border-2 fw-bold btn-sm" onClick={() => { setOutput(value); setProcess("default") }}>Reste</button>
                        </div>

                        <div className="d-flex justify-content-evenly align-items-center gap-2 flex-wrap">

                            <select className="p-2" onChange={(e) => setProcess(e.target.value)} value={process}>
                                <option value="default" className="d-none p-0 m-0">Select Process</option>
                                <option value="uppercase">Uppercase</option>
                                <option value="lowercase">Lowercase</option>
                                <option value="capitalize">Capitalize</option>
                                <option value="removeExtraSpaces">Remove Extra Spaces</option>
                                <option value="removeLineBreaks">Remove Line Breaks</option>
                                <option value="removeBlankLines">Remove Blank Lines</option>
                                <option value="removeNumers">Remove Numers</option>
                                <option value="extractNumers">Extract Numers</option>
                                <option value="reverseText">Reverse Text</option>
                                <option value="upsideDownText">Upside Down Text</option>
                            </select>

                            <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm" onClick={executeProcess}>Execute</button>
                        </div>

                        {/* <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={toUpperCase}>Uppercase</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={toLowerCase}>Lowercase</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={toCapitalize}>Capitalize</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={removeExtraSpaces}>Remove Extra Space</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={removeLineBreaks}>Remove Line Breaks</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={removeBlankLines}>Remove Blank Lines</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={removeNumbers}>Remove Numbers</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={extractNumers}>Extract Numbers</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={reverseText}>Reverse Text</button>
                        <button type="button" className="btn btn-outline-primary border-2 fw-bold btn-sm mt-3" onClick={upsideDownText}>Upside Down Text</button> */}

                    </div>

                    <hr className="my-4" />
                    <div className="preview">
                        <div className="d-flex justify-content-between mb-2">
                            <h4>Output:</h4>
                            <button type="button" className="btn btn-outline-success border-2 fw-bold btn-sm" onClick={copyText}>Copy Text</button>
                        </div>
                        <pre style={{ fontSize: "14px", whiteSpace: "pre-wrap", wordWrap: "break-word" }} className="bg-dark text-white p-3">{output === "" ? "" : output}</pre>

                    </div>
                </div>
            </div >
        </>
    )
}
