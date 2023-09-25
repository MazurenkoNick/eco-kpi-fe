import React from 'react';
import './Table.css'

function EcoTable({ pollutions }) {
    return (
        <div className="container">
            <table className="table table-striped table-bordered table-hover">
                <thead className="">
                    <tr>
                        <th rowSpan="2">ID</th>
                        <th rowSpan="2">Назва підприємства</th>
                        <th rowSpan="2">Назва забруднюючої речовини</th>
                        <th rowSpan="2">Усього викидів підприємства т/рік</th>
                        <th colSpan="2">Нормативи ГДВ забруднюючих речовин</th>
                        <th rowSpan="2">Кількість перевищення викидів</th>
                        <th rowSpan="2">Період</th>
                        <th rowSpan="2">Більше</th>
                    </tr>
                    <tr>
                        <th>Величина масової витрати г/год.</th>
                        <th>Гранично допустимі викиди мг/м3</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over your 'pollutions' data and create table rows here */}
                </tbody>
            </table>
        </div>
    );
}

export default EcoTable;