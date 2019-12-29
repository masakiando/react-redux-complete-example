/* eslint-disable no-unused-expressions */
import { injectGlobal } from "styled-components";

export default () => {
    injectGlobal` 
        body {
            background-color: green;
            color: navy-blue;
            div {
                padding: 4px;
            }

            a {
                padding: 0 10px;
                text-decoration: none;
            }

            a:hover {
                color: blue;
            }
            .center, .center-column, .top, .right, .bottom, .left {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .center-column {
                flex-direction: column;
            }
            
            .top    { align-items:     flex-start; }
            .right  { justify-content: flex-end;   }
            .bottom { align-items:     flex-end;   }
            .left   { justify-content: flex-start; }
            
            .single-spaced, .single-spaced * {
                line-height: 1;
            }
            @media (max-width: 1024px) {
                .desktop {
                    display: none;
                }
            }
            #a { grid-area: a; }
            #b { grid-area: b; }
            #c { grid-area: c; }
            #d { grid-area: d; }
            #e { grid-area: e; }

            #grid {
                display: grid;
                grid-template-areas:
                    "a a a a"
                    "b c d e";

                grid-row-gap: 1rem;
            }

            @media (max-width: 512px) {
                #grid {
                    grid-template-areas:
                        "a a a"
                        "b c d"
                        "e e e";
                }
            }
        }
    `;

    return null;
};
