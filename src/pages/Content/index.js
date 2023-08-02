import { printLine } from './modules/print';
import React from 'react';
import Popup from '../Popup/Popup';
import { createRoot } from 'react-dom/client';

const domNode = document.createElement('div');
const root = createRoot(domNode);
root.render(<Popup />);
document.body.appendChild(domNode);

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");
