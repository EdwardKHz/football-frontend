export function groupCountriesWithLeagues(rows) {
    return Object.values(
        rows.reduce((acc, row) => {
            if (!acc[row.country]) {
                acc[row.country] = {
                    country: row.country,
                    flag: row.country_flag,
                    leagues: []
                };
            }

            if (row.id) {
                acc[row.country].leagues.push({
                    id: row.id,
                    name: row.league_name,
                    logo: row.league_logo
                });
            }

            return acc;
        }, {})
    );
}
