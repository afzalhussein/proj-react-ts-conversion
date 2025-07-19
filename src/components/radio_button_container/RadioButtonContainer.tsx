import RadioButton from "../radio_button/RadioButton";

export default function RadioButtonContainer( { children }: { children: React.ReactNode }) {
    return (
        <div className="radio-section">
            {children}
        </div>
    );
}