// src/components/LeftPanel.jsx
import React from 'react';

function LeftPanel() {
  return (
    <div className="table-container">
    <h3>RBC</h3>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Count</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Angled Cells</td>
          <td>222</td>
          <td>67%</td>
        </tr>
        <tr>
          <td>Round Cells</td>
          <td>50</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>Other RBC Types</td>
          <td>20</td>
          <td>18%</td>
        </tr>
      </tbody>
    </table>
    
    <h3>WBC</h3>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Count</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basophil</td>
          <td>50</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Eosinophil</td>
          <td>30</td>
          <td>15%</td>
        </tr>
        <tr>
          <td>Neutrophil</td>
          <td>70</td>
          <td>35%</td>
        </tr>
        <tr>
          <td>Other WBC Types</td>
          <td>20</td>
          <td>30%</td>
        </tr>
      </tbody>
    </table>
    
    <h3>Platelets</h3>
    <table>
      <thead>
        <tr>
          <th>Count</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>150</td>
          <td>45%</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default LeftPanel;
