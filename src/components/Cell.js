import React from 'react'

const styles = {
    cell: {
        padding: "1em",
        fontFamily: "sans"
    },
    td: {
        wordBreak: "break-all",
    }
}

function Cell({ data }) {
    return (
        <tr>
            <td>{data?.cell_type || "N/A"}</td>
            <td>{data?.execution_count || "N/A"}</td>
            <td>{JSON.stringify(data?.metadata) || "N/A"}</td>
            <td>
                {
                    data
                        &&
                        data.outputs
                        &&
                        data.outputs.length > 0
                        ?
                        <div dangerouslySetInnerHTML={{__html: `<div>${data.outputs[0].data["text/html"].map(el => el)}</div>`}} />
                        :
                        "N/A"
                }
            </td>
            <td>
                {data?.source.map((entry) => (
                    <li>{entry}</li>
                ))}
            </td>
        </tr>
    )
}

export default Cell