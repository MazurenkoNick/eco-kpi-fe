import React from 'react';
import './Table.css'
import Table from "./Table";
import PollutionUpdateForm from "../pollution/PollutionUpdateForm";
import PollutionDeleteButton from "../pollution/PollutionDeleteButton";

function EcoTable({ pollutions, onPollutionUpdate, onPollutionDelete }) {
    return (
        <Table>
            <thead className="">
                <tr>
                    <th rowSpan="2">ID</th>
                    <th rowSpan="2">Назва підприємства</th>
                    <th rowSpan="2">Назва забруднюючої речовини</th>
                    <th rowSpan="2">Усього викидів підприємства г/год.</th>
                    <th colSpan="2">Нормативи ГДВ забруднюючих речовин</th>
                    <th rowSpan="2">Кількість перевищення викидів</th>
                    <th rowSpan="2">Період</th>
                    <th rowSpan="2">Оновлення даних</th>
                    <th rowSpan="2">Видалення</th>
                </tr>
                <tr>
                    <th>Величина масової витрати г/год.</th>
                    <th>Гранично допустимі викиди мг/м3</th>
                </tr>
            </thead>
            <tbody>
            {pollutions.map((pollution) => (
                <tr key={pollution.id}>
                    <td>{pollution.id}</td>
                    <td>{pollution.objectName}</td>
                    <td>{pollution.pollutantName}</td>
                    <td>{pollution.valuePollution.toFixed(2)}</td>
                    <td>{pollution.pollutantMfr}</td>
                    <td>{pollution.pollutantTlv}</td>
                    <td> {/* You can add the corresponding data here */}</td>
                    <td>{pollution.year}</td>
                    <td><PollutionUpdateForm pollution={pollution} onUpdate={onPollutionUpdate}/></td>
                    <td><PollutionDeleteButton pollution={pollution} onDelete={onPollutionDelete}/></td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default EcoTable;