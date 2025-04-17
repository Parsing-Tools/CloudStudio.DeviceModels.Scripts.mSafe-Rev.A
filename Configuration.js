function getConfiguration(config) {

    config.addressLabel = {en: "Serial Number", es: "Número de Serie"};
}

function getEndpoints(deviceAddress, endpoints) {
    endpoints.addEndpoint("OPMODE", {en: "Operation mode", es: "Modo de operación"}, endpointType.genericSensor)
              .variableTypeId = 1079; 
    endpoints.addEndpoint("AI1_CONNECTED", {en: "Analog input #1 - WHP", es: "Entrada analógica #1 - WHP"}, endpointType.genericSensor)
              .variableTypeId = 1106; 
    endpoints.addEndpoint("WHP", {en: "Wellhead pressure", es: "Presión de cabeza de pozo"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AI2_CONNECTED", {en: "Analog input #2 - LP", es: "Entrada analógica #2 - LP"}, endpointType.genericSensor)
              .variableTypeId = 1106; 
    endpoints.addEndpoint("LP", {en: "Line pressure", es: "Presión de línea"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("AI3_ENABLED", {en: "Entrada analógica #3 - Enable", es: "Entrada analógica #3 - Habilitación"}, endpointType.genericSensor)
              .variableTypeId = 1105; 
    endpoints.addEndpoint("AI3_CONNECTED", {en: "Analog input #3 - connection status", es: "Entrada analógica #3 - estado de conexión"}, endpointType.genericSensor)
              .variableTypeId = 1106; 
    endpoints.addEndpoint("AI3_TYPE", {en: "Analog input #3 - Type", es: "Entrada analógica #3 - Tipo"}, endpointType.genericSensor)
              .variableTypeId = 1104; 
    endpoints.addEndpoint("AI3_VALUE", {en: "Analog input #3 - Measurement", es: "Entrada analógica #3 - Medición"}, endpointType.genericSensor)
              .variableTypeId = 1126; 
    endpoints.addEndpoint("AI4_ENABLED", {en: "Entrada analógica #4 - Enable", es: "Entrada analógica #4 - Habilitación"}, endpointType.genericSensor)
              .variableTypeId = 1105; 
    endpoints.addEndpoint("AI4_CONNECTED", {en: "Analog input #4 - connection status", es: "Entrada analógica #4 - estado de conexión"}, endpointType.genericSensor)
              .variableTypeId = 1106; 
    endpoints.addEndpoint("AI4_TYPE", {en: "Analog input #4 - Type", es: "Entrada analógica #4 - Tipo"}, endpointType.genericSensor)
              .variableTypeId = 1104; 
    endpoints.addEndpoint("AI4_VALUE", {en: "Analog input #4 - Measurement", es: "Entrada analógica #4 - Medición"}, endpointType.genericSensor)
              .variableTypeId = 1126; 
    endpoints.addEndpoint("AP", {en: "Actuator pressure", es: "Presión del actuador"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("VALVE_STATUS", {en: "Valve status", es: "Estado de la válvula"}, endpointType.genericSensor)
              .variableTypeId = 1080; 
    endpoints.addEndpoint("VALVE_STATUS-0/1", {en: "Valve status (0/1)", es: "Estado de la válvula (0/1)"}, endpointType.genericSensor)
              .variableTypeId = 1128; 
    endpoints.addEndpoint("LAST_OP", {en: "Last operation", es: "Última operación"}, endpointType.genericSensor)
              .variableTypeId = 1081; 
    endpoints.addEndpoint("LAST_OP_CAUSE", {en: "Cause of last operation", es: "Causa de la última operación"}, endpointType.genericSensor)
              .variableTypeId = 1082; 
    endpoints.addEndpoint("LAST_PST", {en: "Latest PST result", es: "Último resultado del PST"}, endpointType.genericSensor)
              .variableTypeId = 1102; 
    endpoints.addEndpoint("DATE_PST", {en: "Date and time of last PST operation", es: "Fecha y hora de la última operación PST"}, endpointType.genericSensor)
              .variableTypeId = 1084; 
    endpoints.addEndpoint("PANEL_TEMP", {en: "Panel temperature", es: "Temperatura de gabinete"}, endpointType.temperatureSensor); 
    endpoints.addEndpoint("CB", {en: "Battery voltage CB", es: "Tensión de batería CB"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("PB", {en: "Battery voltage PB", es: "Tensión de batería PB"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("B_IDP", {en: "IDP Vsupply", es: "Tensión de batería IDP"}, endpointType.voltageSensor); 
    endpoints.addEndpoint("POSITION_ENABLED", {en: "Activation of the position indicator", es: "Habilitación de indicador de posición"}, endpointType.genericSensor)
              .variableTypeId = 1105; 
    endpoints.addEndpoint("OPEN_VALVE_SWITCH", {en: "Valve opening switch #1", es: "Switch de apertura de válvula #1"}, endpointType.genericSensor)
              .variableTypeId = 1078; 
    endpoints.addEndpoint("CLOSE_VALVE_SWITCH", {en: "Valve closing switch #1", es: "Switch de cierre de válvula #1"}, endpointType.genericSensor)
              .variableTypeId = 1078; 
    endpoints.addEndpoint("WHP LT", {en: "AI1 low Trigger level", es: "AI1 nivel inferior de activación"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("WHP HT", {en: "AI1 High Trigger level", es: "AI1 nivel superior de activación"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("LP_LT", {en: "AI2 low Trigger level", es: "AI2 nivel inferior de activación"}, endpointType.pressureSensor); 
    endpoints.addEndpoint("LP_HT", {en: "AI2 High Trigger level", es: "AI2 nivel superior de activación"}, endpointType.pressureSensor); 

        
}

function validateDeviceAddress(address, result) {

}

function updateDeviceUIRules(device, rules) {


     rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules) {

     rules.canDelete = true;
    // rules.canEditSubType = (endpoint.address == "2");
}
