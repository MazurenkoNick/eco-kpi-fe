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
                    <th colSpan="3">Нормативи забруднюючих речовин</th>
                    <th rowSpan="2">Концентрація викидів</th>
                    <th rowSpan="2">Коефіцієнт небезпеки</th>
                    <th rowSpan="2">Індивідуальний канцерогенний ризик</th>
                    <th rowSpan="2">Збитки</th>
                    <th rowSpan="2">Період</th>
                    <th rowSpan="2">Оновлення даних</th>
                    <th rowSpan="2">Видалення</th>
                </tr>
                <tr>
                    <th>Величина масової витрати г/год.</th>
                    <th>Гранично допустимі викиди мг/м3</th>
                    <th>Гранично допустимі концентрація мг/м3</th>
                </tr>
            </thead>
            <tbody>
            {pollutions.map((pollution) => (
                <tr key={pollution.id}>
                    <td>{pollution.id}</td>
                    <td>{pollution.objectName}</td>
                    <td>{pollution.pollutantName}</td>
                    <td>{pollution.valuePollution ? pollution.valuePollution.toPrecision(2) : 'N/A'}</td>
                    <td>{pollution.pollutantMfr}</td>
                    <td>{pollution.pollutantElv}</td>
                    <td>{pollution.pollutantTlv}</td>
                    <td>{pollution.pollutionConcentration}</td>
                    <td>{pollution.hq}</td>
                    <td>{pollution.cr}</td>
                    <td>{pollution.fee ? pollution.fee.toPrecision(2) : 'N/A'}</td>
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