export const FormContainer = ({children}) => {
return <section className="intro">
        <div className="bg-image-vertical h-100">
            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
}