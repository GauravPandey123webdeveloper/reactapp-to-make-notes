// import React, { useEffect, useRef, useMemo } from "react";
// import { Jodit } from "jodit";

// export default function NoteBar() {
//     const editorRef = useRef(null);

//     useEffect(() => {
//         if (editorRef.current) {
//             const editor = Jodit.make(editorRef.current, {
//                 buttons: ["ul",'ol'],
                
//                 minHeight: "600px",
//                 style: {
//                     marginBottom: "0px",
//                     marginTop: "0px",
//                     padding: "20px",
//                     width: "600",
//                     lineHeight: "1.5",
//                     color: "rgba(0, 0, 0, 1)",
//                 },
//                 showXPathInStatusbar: false,
//                 showCharsCounter: false,
//                 showWordsCounter: false,
//                 toolbarAdaptive: false,
//                 enableDragAndDropFileToEditor: true,
//             });

//             return () => {
//                 editor.destruct(); // Cleanup Jodit instance when component unmounts
//             };
//         }
//     }, []);

//     return (
//         <div>
//             <textarea ref={editorRef}></textarea>
//         </div>
//     );
// }
