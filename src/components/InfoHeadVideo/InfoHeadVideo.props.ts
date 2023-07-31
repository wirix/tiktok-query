import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface IInfoHeadVideo extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	nickname: string;
	hashTitle?: string;
	musicTitle: string;
}