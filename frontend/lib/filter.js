const filterByDate = async (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startDateUnix = startDate.getTime() / 1000;
    const endDateUnix = endDate.getTime() / 1000;
    console.log(startDateUnix, endDateUnix);
}

export { filterByDate };