// i: [n-1 0]

// j rand 0 i
// ai - aj
export function selectRandomItems<T>(arr: T[], n: number): T[] {
    function exchange(from: number, to: number): void {
        const temp = arr[from];

        arr[from] = arr[to];
        arr[to] = temp;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i);

        exchange(i, j);
    }

    return arr.slice(0, n);
}

export interface DeclensionCases {
    singular: string; // арбуз
    singularGenitive: string; //арбуза
    plural: string; // арбузов
}

export function getDeclension(cases: DeclensionCases, value: number): string {
    const lastDigit = value % 10;
    const shouldUsePlural = lastDigit === 0 || (value >= 5 && value <= 20) || (lastDigit >= 5 && lastDigit <= 9);
    const shouldUseSingular = lastDigit === 1;

    if (shouldUsePlural) {
        return cases.plural;
    } else if (shouldUseSingular) {
        return cases.singular;
    }

    return cases.singularGenitive;
}

export function times(from: number, to: number): number[] {
    const res: number[] = [];

    if (from > to) {
        throw new Error(`from (${from}) is greater than to (${to})`);
    }

    for (let i = from; i <= to; i++) {
        res.push(i);
    }

    return res;
}