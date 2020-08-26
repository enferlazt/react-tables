import React from 'react'
import { connect } from 'react-redux'
import classes from './TableList.module.scss'

const TableList = () => {
    const listOfTables = [
        {
            name: 'Test Table 1',
            headers: [{}, {}, {}, {}, {}],
            fields: [{}, {}, {}]
        },
        {
            name: 'Test Table 2',
            headers: [{}, {}, {}, {}, {}],
            fields: [{}, {}, {}, {}, {}]
        },
        {
            name: 'Test Table 3',
            headers: [{}, {}, {}, {}, {}, {}, {}, {}],
            fields: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
        },
        {
            name: 'Test Table 4',
            headers: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            fields: [{}, {}, {}, {}, {}, {}, {}]
        },
        {
            name: 'Test Table 5',
            headers: [{}, {}],
            fields: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
        }
    ]

    return (
        <div className={classes.TableList}>
            {listOfTables.map((tableDesc, index) => (
                <div key={index} className={classes.TableList__container}>
                    <h3>{tableDesc.name}</h3>
                    <span>{`Column: ${tableDesc.headers.length}`}</span>
                    <span>{`Rows: ${tableDesc.fields.length}`}</span>
                </div>
            ))}
        </div>
    )
}

export default connect(null)(TableList)