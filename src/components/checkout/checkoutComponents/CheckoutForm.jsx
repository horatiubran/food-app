export const CheckoutForm = () => {
    return <section className="intro">
        <div className="bg-image-vertical h-100">
            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="card">
                                <div className="card-body p-5">

                                    <h1 className="mb-5 text-center">Checkout Form</h1>

                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form6Example1" className="form-control"
                                                           placeholder="First Name"/>
                                                    <label className="form-label" htmlFor="form6Example1">First
                                                        name</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form6Example2" className="form-control"/>
                                                    <label className="form-label" htmlFor="form6Example2">Last
                                                        name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form6Example3" className="form-control"/>
                                            <label className="form-label" htmlFor="form6Example3">Company name
                                                (optional)</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form6Example4" className="form-control"/>
                                            <label className="form-label" htmlFor="form6Example4">Address</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form6Example5" className="form-control"/>
                                            <label className="form-label" htmlFor="form6Example5">Email</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="number" id="form6Example6" className="form-control"/>
                                            <label className="form-label" htmlFor="form6Example6">Phone</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                                            <label className="form-label" htmlFor="form6Example7">Additional
                                                information (floor, door color etc.)</label>
                                        </div>

                                        <button type="submit" className="btn btn-secondary btn-rounded btn-block">Place
                                            order
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}