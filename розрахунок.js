function calculateTicketCost(adults13to64, adults65to99, children4to12, childrenUnder4) {
    const priceAdult13to64 = 38.30; // дорослі 13–64 роки
    const priceAdult65to99 = 28.20; // дорослі 65–99 років
    const priceChild4to12 = 28.20;  // діти 4–12 років
    const priceChildUnder4 = 0;     // діти до 4 років (безкоштовно)

    // перевірка: діти (будь-якого віку) можуть відвідувати лише в супроводі дорослих
    const totalAdults = adults13to64 + adults65to99;
    const totalChildren = children4to12 + childrenUnder4;
    if (totalChildren > 0 && totalAdults === 0) {
        return "Помилка: діти (будь-якого віку) можуть відвідувати океанаріум лише в супроводі дорослих.";
    }

    // для кожної категорії
    const costAdults13to64 = adults13to64 * priceAdult13to64;
    const costAdults65to99 = adults65to99 * priceAdult65to99;
    const costChildren4to12 = children4to12 * priceChild4to12;
    const costChildrenUnder4 = childrenUnder4 * priceChildUnder4;

    // сума
    const totalCost = costAdults13to64 + costAdults65to99 + costChildren4to12 + costChildrenUnder4;

    // форматування результату
    let result = "Розрахунок вартості квитків в Океанографічний парк Валенсії:\n";
    result += `Дорослі (13–64 роки): ${adults13to64} x ${priceAdult13to64} € = ${costAdults13to64.toFixed(2)} €\n`;
    result += `Дорослі (65–99 років): ${adults65to99} x ${priceAdult65to99} € = ${costAdults65to99.toFixed(2)} €\n`;
    result += `Діти (4–12 років): ${children4to12} x ${priceChild4to12} € = ${costChildren4to12.toFixed(2)} €\n`;
    result += `Діти (до 4 років): ${childrenUnder4} x ${priceChildUnder4} € = ${costChildrenUnder4.toFixed(2)} €\n`;
    result += `\nЗагальна вартість: ${totalCost.toFixed(2)} €`;

    return result;
}