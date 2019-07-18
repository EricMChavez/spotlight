import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
let pdf = 'https://spotlight-storage.s3.amazonaws.com/003-10-07-html-5-scalable-vector-graphics.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Display extends Component {
	render() {
		return (
			<Document className="display" file={pdf}>
				<Page height={window.innerHeight - 150} className="page" pageNumber={1} />
			</Document>
		);
	}
}
