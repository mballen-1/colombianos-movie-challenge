export interface SortsProps {
    sortsData: {
        onSortInputChange : (sort : string) => void;
        onTopsInputChange : (tops : string) => void;
        sortSelectOption: string;
        topSelectOption: string;
    }
}