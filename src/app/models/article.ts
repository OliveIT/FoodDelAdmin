import { firestore } from 'firebase/app';

export class Article {
    $key: string;
    category: string;
    title: string;
    price: number;
    lowerCaseTitle: string;
    details: string;
    image: string;
    active: true;
    timestamp: firestore.FieldValue;
}
