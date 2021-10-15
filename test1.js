const getCountry = async () => {
  return [
    { name: 'Thailand', abbr: 'th', remark: '', regionId: 1 },
    { name: 'United State', abbr: 'US', remark: '', regionId: 7 },
    { name: 'Singapore', abbr: 'sg', remark: 'This is sg', regionId: 1 }
  ]
}

const getRegion = async () => {
  return [
    { id: 1, name: 'Asia' },
    { id: 2, name: 'South America' },
    { id: 7, name: 'North America' }
  ]
}

const main = async () => {
  const region = await getRegion()
  const country = await getCountry()
  const result = {}
  for (const c of country) {
    const r = region.find((r) => r.id == c.regionId)
    result[c.abbr] = r.name
  }
  console.log(result)
}

main()
