export const Message = ({ label, placeholder, onChange }) => {
    return (
        <div className="text-sm w-full ">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 border border-border rounded "
                placeholder={placeholder}
                onChange={onChange}></textarea>
        </div>
    );
};

export const Select = ({ label, options, onchange }) => {
    return (
        <>
            <div className="text-sm w-full">
                <label className="text-border font-semibold">{label}</label>
                <select className="w-full mt-2 px-6 py-4 bg-main border border-border rounded" onChange={onchange}>
                    {
                        options.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.name}</option>
                        ))
                    }
                </select>
            </div></>

    );
}