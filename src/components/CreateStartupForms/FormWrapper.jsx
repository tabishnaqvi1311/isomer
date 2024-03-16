const FormWrapper = ({ title, subtitle, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="text-center text-slate-200">
                <h1 className="text-3xl">{title}</h1>
                <span className="texl-lg">{subtitle}</span>
            </div>
            <div className="">{children}</div>
        </div>
    )
}

export default FormWrapper