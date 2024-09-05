import React from 'react'

export const SearchDoctor = () => {
    return (
        <>
            <div className="container-fluid primary-bg my-5 py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h5 className="d-inline-block text-white">
                            Find A Doctor
                        </h5>
                        <h1 className="display-4 mb-4 fw-bold">Find A Healthcare Professionals</h1>
                        <h5 className="text-white fw-normal">
                            Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit
                            sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo
                        </h5>
                    </div>
                    <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
                        <div className="input-group">
                            <select
                                className="form-select w-25"
                                style={{ height: 60 }}
                            >
                                <option selected="">Department</option>
                                <option value={1}>Department 1</option>
                                <option value={2}>Department 2</option>
                                <option value={3}>Department 3</option>
                            </select>
                            <input
                                type="text"
                                className="form-control w-50"
                                placeholder="Keyword"
                            />
                            <button className="btn btn-dark w-25">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}