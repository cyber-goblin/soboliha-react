interface LeadData {
    name: string;
    phone: string;
    comment?: string;
}

export async function sendToBitrix(data: LeadData) {
    const url = "https://b24-27mu8n.bitrix24.ru/rest/1/y2d8cp9gqz00f4m2/crm.lead.add.json";

    const payload = {
        fields: {
            TITLE: "Заявка с сайта Soboliha",
            NAME: data.name,
            PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
            COMMENTS: data.comment || "",
            SOURCE_ID: "WEB", // указывает, что заявка с сайта
        },
        params: { REGISTER_SONET_EVENT: "Y" }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.error) {
            console.error("Ошибка при отправке в Bitrix24:", result.error_description);
        } else {
            console.log("Лид успешно создан в Bitrix24:", result.result);
        }
    } catch (error) {
        console.error("Ошибка сети или запроса:", error);
    }
}
