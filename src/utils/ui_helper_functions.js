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

export function groupStandingsBySeason(rows) {
    return Object.values(
        rows.reduce((acc, row) => {
            const season = row.season;

            if (!acc[season]) {
                acc[season] = {
                    season,
                    first: null,
                    second: null
                };
            }

            if (row.rank === 1) acc[season].first = row;
            if (row.rank === 2) acc[season].second = row;

            return acc;
        }, {})
    ).sort((a, b) => b.season - a.season);
}


