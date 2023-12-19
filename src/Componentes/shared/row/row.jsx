import './row.css'

export const Row = ({elements}) => {

    const keys = Object.keys(elements[0])

    return (
        <div className="rows-container">
           {
            elements.map((activo, item) => (
                <tr key={item} className='row-container'>
                    {
                        keys.map((key, i) => (
                            <td key={i} className='data-container'><p>{activo[key]}</p></td>
                        ))
                    }
                </tr>
            ))
           }
        </div>
    )
}