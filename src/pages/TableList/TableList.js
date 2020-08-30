import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './TableList.module.scss'
import { tableList, tableItem } from '../../redux/actions/tablesActions'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

const TableList = ({listOfTables, error, tableListFetch, tableItemFetch}) => {
    useEffect(() => {
        tableListFetch()
    }, [tableListFetch])

    return (
        <div className={classes.TableList}>
            {
                listOfTables === null ?
                <h2 style={{textAlign: 'center'}}>No tables</h2> :
                Object.keys(listOfTables).length > 0 && Object.keys(listOfTables).map((id, index) => (
                    <div key={index} className={classes.TableList__container} onClick={() => tableItemFetch(id)}>
                        <h3>{listOfTables[id].tableName}</h3>
                        <span>{`Column: ${listOfTables[id].tableHeaders.length}`}</span>
                        <span>{`Rows: ${listOfTables[id].tableFields?.length || '1'}`}</span>
                    </div>
                ))
            }
            {error && <ErrorMessage error={error} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listOfTables: state.tables.listOfTables,
        error: state.tables.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tableListFetch: () => dispatch(tableList()),
        tableItemFetch: id => dispatch(tableItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList)