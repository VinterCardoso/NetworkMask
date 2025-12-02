export interface IPAddress {
    octets: number[];
    isValid: boolean;
}

export interface SubnetMask {
    decimal: string;
    binary: string;
}

export interface NetworkInfo {
    networkId: string;
    broadcastAddress: string;
    validHosts: number;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface Quiz {
    title: string;
    questions: QuizQuestion[];
}