import React, { useState } from "react";
import Header from "../../Header/Header";
import updateF from "./updatefilter.module.css";
import "./updatefilter.css";
import Back from "../../../assets/images/updateback.png";
import Edit from "../../../assets/images/editf.png";
import Del from "../../../assets/images/deletef.png";
import Arrow from "../../../assets/images/ArrowRight.png";
import Add from "../../../assets/images/addbtn.png";
import checkmark from "../../../assets/images/checkmark.png";
import closemark from "../../../assets/images/closemark.png";
import x from "../../../assets/images/cros.png";
import Check from "../../../assets/images/Check.png";
import undo from "../../../assets/images/undof.png";
import { useNavigate } from "react-router-dom";
import { filterArray } from "./filterArr";
const UpdateFilter = () => {
    const [deleteID, setDeleteId] = useState("");
    const [isEdit, setIsEdit] = useState("");
    const [editValue, setEditValue] = useState();
    const [newElement, setNewElement] = useState("");
    const [addNew, setAddNew] = useState();
    const [Sanakbar, setSanakbar] = useState(false);
    const [SanakbarSuccess, setSanakbarSuccess] = useState(false);

    const [Show, setShow] = useState("parent2");
    const [subShow, setSubShow] = useState("parent2child1");

    const [filterArr, setFilterArr] = useState(filterArray);

    const editFilter = (id) => {
        let temp = [];
        let tempChild = [];
        let tempSubChild = [];

        filterArr.map((val, i) => {
            if (val?.id != id) {
                val?.values?.map((val2, i) => {
                    if (val2?.id != id) {
                        val2?.values?.map((val3, i) => {
                            if (val3?.id === id) {
                                tempSubChild = [
                                    ...tempSubChild,
                                    {
                                        id: val3?.id,
                                        name: editValue,
                                        values: val3?.values,
                                    },
                                ];
                            } else {
                                tempSubChild = [
                                    ...tempSubChild,
                                    {
                                        id: val3?.id,
                                        name: val3?.name,
                                        values: val3?.values,
                                    },
                                ];
                            }
                        });

                        tempChild = [
                            ...tempChild,
                            {
                                id: val2?.id,
                                name: val2?.name,
                                values: tempSubChild,
                            },
                        ];

                        tempSubChild = [];
                    } else {
                        tempChild = [
                            ...tempChild,
                            {
                                id: val2?.id,
                                name: editValue,
                                values: val2?.values,
                            },
                        ];
                    }
                });

                temp = [
                    ...temp,
                    {
                        id: val?.id,
                        name: val?.name,
                        values: tempChild,
                    },
                ];

                tempChild = [];
            } else {
                temp = [
                    ...temp,
                    {
                        id: val?.id,
                        name: editValue,
                        values: val?.values,
                    },
                ];
            }
        });

        setFilterArr(temp);

        setDeleteId("");
    };

    const handleEditValue = (e) => {
        const editvalue = e.target.value;
        setEditValue(editvalue);

    };

    const deleteFilter = (id) => {
        let temp = [];
        let tempChild = [];
        let tempSubChild = [];

        filterArr.map((val, i) => {
            if (val?.id != id) {
                val?.values?.map((val2, i) => {
                    if (val2?.id != id) {
                        val2?.values?.map((val3, i) => {
                            if (val3?.id != id) {
                                tempSubChild = [
                                    ...tempSubChild,
                                    {
                                        id: val3?.id,
                                        name: val3?.name,
                                        values: val3?.values,
                                    },
                                ];
                            }
                        });

                        tempChild = [
                            ...tempChild,
                            {
                                id: val2?.id,
                                name: val2?.name,
                                values: tempSubChild,
                            },
                        ];

                        tempSubChild = [];
                    }
                });

                temp = [
                    ...temp,
                    {
                        id: val?.id,
                        name: val?.name,
                        values: tempChild,
                    },
                ];

                tempChild = [];
            }
        });
        setFilterArr(temp);
        setSanakbar(!Sanakbar);

        setTimeout(() => {
            setSanakbar(null);
        }, 5000);
    };

    const addFilter = () => {

        if (addNew === "child") {
            let temp = [];


            filterArr.map((val, i) => {
                if (val?.id === Show) {
                    let length = val?.values?.length + 1;
                    console.log("length", length);
                    temp = [
                        ...temp,
                        {
                            id: val?.id,
                            name: val?.name,
                            values: [
                                ...val.values,
                                { id: `${Show}child${length}`, name: newElement, values: [] },
                            ],
                        },
                    ];
                } else {
                    temp = [
                        ...temp,
                        {
                            id: val?.id,
                            name: val?.name,
                            values: val?.values,
                        },
                    ];
                }
            });

            setFilterArr(temp);
            temp = []

        }
        else if (addNew === "subChild") {

            let temp = [];
            let tempChild = [];
            let tempSubChild = [];

            filterArr.map((val, i) => {
                if (val?.id === Show) {
                    val?.values?.map((data, i) => {
                        if (data?.id === subShow) {
                            let length = data?.values?.length + 1;

                            tempChild = [
                                ...tempChild,
                                {
                                    id: data?.id,
                                    name: data?.name,
                                    values: [
                                        ...data?.values,
                                        { id: `${subShow}sub${length}`, name: newElement },
                                    ],
                                },
                            ];
                        }
                        else {
                            tempChild = [
                                ...tempChild,
                                {
                                    id: data?.id,
                                    name: data?.name,
                                    values: data?.values,
                                },
                            ];
                        }
                    })

                    temp = [
                        ...temp,
                        {
                            id: val?.id,
                            name: val?.name,
                            values: tempChild,
                        },
                    ];

                    tempChild = []

                } else {
                    temp = [
                        ...temp,
                        {
                            id: val?.id,
                            name: val?.name,
                            values: val?.values,
                        },
                    ];
                }
            });

            // console.log("subChild", temp)

            setFilterArr(temp);

        }

        setNewElement("")
        setAddNew("")
    };

    const FilterValueUpdate = () => {
        setSanakbarSuccess(!SanakbarSuccess);


        setTimeout(() => {
            setSanakbarSuccess(null);
        }, 2000);
    };
    const FilterValueAdd = () => {
        setSanakbarSuccess("add");


        setTimeout(() => {
            setSanakbarSuccess(null);
        }, 2000);
    };

    const redirect = useNavigate();
    const getNewElement = (e) => {
        setNewElement(e.target.value);
        console.log("newElelment value", newElement)
    };



    return (
        <>
            <Header showF={true} />
            <div className="update_filter_main_div">
                <div className="update_filter_wrapper">
                    <div className="update_heading_box">
                        <div className="update_back_arrow" onClick={() => redirect(-1)}>
                            <img src={Back} />
                        </div>
                        <div className="update_heading">Update Filters</div>
                    </div>

                    <div className="update_filter_outer_div">
                        <div className="update_filter_cat_div">
                            {filterArr?.map((data, index) => {
                                return (
                                    <>
                                        <div
                                            className={
                                                data?.name === "App Categories"
                                                    ? "update_f_bg_wraaper1"
                                                    : "update_f_bg_wraaper"
                                            }
                                            key={index}
                                        >
                                            {isEdit === data?.id ? (
                                                <div className="update_filter_edit_field" key={data.id}>
                                                    <div>
                                                        {" "}
                                                        <input
                                                            onChange={(e) => handleEditValue(e)}
                                                            placeholder="Add Text"
                                                            className="edit_input_field"
                                                        />
                                                    </div>
                                                    <div className="update_filter_edit_btn">
                                                        <div
                                                            onClick={() => {
                                                                editFilter(data?.id);
                                                                setIsEdit("");
                                                                FilterValueUpdate();
                                                            }}
                                                        >
                                                            <img src={checkmark} />
                                                        </div>
                                                        <div onClick={() => setIsEdit("")}>
                                                            <img src={closemark} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    key={data.id}
                                                    className={
                                                        data?.name === "App Categories"
                                                            ? "update_f_app_cat1"
                                                            : "update_f_app_cat"
                                                    }
                                                    onClick={() => {
                                                        setShow(data?.id === "parent1" ? Show : data?.id);
                                                        setSubShow(data?.values[0]?.id);
                                                    }}
                                                >
                                                    {data?.name}
                                                </div>
                                            )}

                                            {isEdit === "" ? (
                                                <div className="update_filter_curd_sec">
                                                    <div onClick={() => setIsEdit(data?.id)}>
                                                        <img src={Edit} />
                                                    </div>
                                                    <div
                                                        data-toggle="modal"
                                                        data-target="#exampleModalCenter"
                                                    >
                                                        <img
                                                            src={Del}
                                                            onClick={() => {

                                                                setDeleteId(data?.id);
                                                            }}
                                                        />
                                                    </div>
                                                    {data?.name != "App Categories" && (
                                                        <div className="arrow_dir">
                                                            <img src={Arrow} />
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                        </div>

                        <div className="update_filter_cat_div">
                            {filterArr?.map((data, index) => {
                                return (
                                    <>
                                        {data?.id === Show
                                            ? data?.values?.map((data1, index) => {
                                                return (
                                                    <>
                                                        <div className="update_f_bg_wraaper">
                                                            {isEdit === data1?.id ? (
                                                                <div
                                                                    className="update_filter_edit_field"
                                                                    key={data.id}
                                                                >
                                                                    <div>
                                                                        {" "}
                                                                        <input
                                                                            onChange={(e) => handleEditValue(e)}
                                                                            placeholder="Add Text"
                                                                            className="edit_input_field"
                                                                        />
                                                                    </div>
                                                                    <div className="update_filter_edit_btn">
                                                                        <div
                                                                            onClick={() => {
                                                                                editFilter(data1?.id);
                                                                                setIsEdit("");
                                                                                FilterValueUpdate();
                                                                            }}
                                                                        >
                                                                            <img src={checkmark} />
                                                                        </div>
                                                                        <div onClick={() => setIsEdit("")}>
                                                                            <img src={closemark} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    className="update_f_app_cat"
                                                                    onClick={() => {
                                                                        setSubShow(data1?.id);
                                                                    }}
                                                                >
                                                                    {data1?.name}
                                                                </div>
                                                            )}
                                                            {isEdit === "" ? (
                                                                <div className="update_filter_curd_sec">
                                                                    <div onClick={() => setIsEdit(data1?.id)}>
                                                                        <img src={Edit} />
                                                                    </div>
                                                                    <div
                                                                        data-toggle="modal"
                                                                        data-target="#exampleModalCenter"
                                                                    >
                                                                        <img
                                                                            src={Del}
                                                                            onClick={() => {
                                                                                // deleteFilter(data2?.id);
                                                                                setDeleteId(data1?.id);
                                                                            }}

                                                                        />
                                                                    </div>
                                                                    <div className="arrow_dir">
                                                                        <img src={Arrow} />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                    </>
                                                );
                                            })
                                            : null}
                                    </>
                                );
                            })}
                            {addNew === "child" && (
                                <div className="update_filter_edit_field">
                                    <div>
                                        {" "}
                                        <input
                                            onChange={(e) => getNewElement(e)}
                                            name="elments1"
                                            value={newElement.elments1}
                                            placeholder="Add Text"
                                            className="edit_input_field"
                                        />
                                    </div>
                                    <div className="update_filter_edit_btn">
                                        <div onClick={() => FilterValueAdd()}>
                                            <img src={checkmark} onClick={addFilter} />
                                        </div>
                                        <div onClick={() => setAddNew("")}>
                                            <img src={closemark} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div
                                className="add_btn_wrapper"
                                onClick={() => setAddNew("child")}
                            >
                                <div className="update_f_add_btn">
                                    <img src={Add} />
                                </div>
                            </div>
                        </div>

                        <div className="update_filter_cat_div_last">
                            {filterArr
                                ?.filter((val) => val?.id === Show)[0]
                                ?.values?.map((data, index) => {
                                    return (
                                        <>
                                            {data?.id === subShow
                                                ? data?.values?.map((data2, index) => {
                                                    return (
                                                        <>
                                                            <div className="update_f_bg_wraaper">
                                                                {isEdit === data2?.id ? (
                                                                    <div
                                                                        className="update_filter_edit_field"
                                                                        key={data.id}
                                                                    >
                                                                        <div>
                                                                            {" "}
                                                                            <input
                                                                                onChange={(e) => handleEditValue(e)}
                                                                                placeholder="Add Text"
                                                                                className="edit_input_field"
                                                                            />
                                                                        </div>
                                                                        <div className="update_filter_edit_btn">
                                                                            <div
                                                                                onClick={() => {
                                                                                    editFilter(data2?.id);
                                                                                    setIsEdit("");
                                                                                    FilterValueUpdate();
                                                                                }}
                                                                            >
                                                                                <img src={checkmark} />
                                                                            </div>
                                                                            <div onClick={() => setIsEdit("")}>
                                                                                <img src={closemark} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <div className="update_f_app_cat">
                                                                        {data2?.name}
                                                                    </div>
                                                                )}
                                                                {isEdit === "" ? (
                                                                    <div className="update_filter_curd_sec">
                                                                        <div onClick={() => setIsEdit(data2?.id)}>
                                                                            <img src={Edit} />
                                                                        </div>
                                                                        <div
                                                                            data-toggle="modal"
                                                                            data-target="#exampleModalCenter"
                                                                        >
                                                                            <img
                                                                                src={Del}
                                                                                onClick={() => {
                                                                                    // deleteFilter(data2?.id);
                                                                                    setDeleteId(data2?.id);
                                                                                }}
                                                                            />

                                                                            {/* <!-- Modal --> */}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </div>
                                                        </>
                                                    );
                                                })
                                                : null}
                                        </>
                                    );
                                })}
                            {addNew === "subChild" && (
                                <div className="update_filter_edit_field">
                                    <div>
                                        {" "}
                                        <input
                                            onChange={(e) => getNewElement(e)}
                                            name="elments2"
                                            value={newElement.elments2}
                                            placeholder="Add Text"
                                            className="edit_input_field"
                                        />
                                    </div>
                                    <div className="update_filter_edit_btn">
                                        <div onClick={() => FilterValueAdd()}>
                                            <img src={checkmark} onClick={addFilter} />
                                        </div>
                                        <div onClick={() => setAddNew("")}>
                                            <img src={closemark} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div
                                className="add_btn_wrapper"
                                onClick={() => setAddNew("subChild")}
                            >
                                <div className="update_f_add_btn">
                                    <img src={Add} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="update_filter_snackbar">
                    {Sanakbar && (
                        <div className="u_f_snackbar">
                            <div>
                                <img src={Check} />
                            </div>
                            <div className="update_f_snak_text">
                                1 filter item was deleted
                            </div>
                            <div className="undo_f_snak">
                                <img src={undo} />
                            </div>
                        </div>
                    )}
                    {SanakbarSuccess === true ? (
                        <div className="u_f_snackbar_success">
                            <div>
                                <img src={Check} />
                            </div>
                            <div className="update_f_success">1 filter item was updated</div>
                        </div>
                    ) : ""}
                    {SanakbarSuccess == "add" ? (
                        <div className="u_f_snackbar_success">
                            <div>
                                <img src={Check} />
                            </div>
                            <div className="update_f_success">1 filter item has been add</div>
                        </div>
                    ) : ""}
                </div>
            </div>
            <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div className="update_filter_del_modal">
                            <div className="update_del_modal_heading">Are you sure?</div>
                            <div
                                className="update_f_del_modal_c"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    setDeleteId("");
                                }}
                            >
                                <img src={x} />
                            </div>
                        </div>
                        <div className="del_modal_sep"></div>

                        <div class="modal-body_content">
                            Are you sure you would like to delete this item?
                        </div>
                        <div className="del_modal_sep"></div>
                        <div class="modal-footer_content">
                            <div
                                data-dismiss="modal"
                                onClick={() => {
                                    deleteFilter(deleteID);
                                }}
                            >
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateFilter;
