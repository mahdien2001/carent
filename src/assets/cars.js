import { onMounted, reactive, ref } from "vue";

export default {
    setup() {


        let cars = reactive(
            [

                // trucks
                {
                    image: "DodgeRam15002019",
                    name: "Dodge Ram 1500 2019",
                    type: "trucks",
                    brand: "Ram",
                    price: 63,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordF-152017",
                    name: "Ford F-15 2017",
                    type: "trucks",
                    brand: "Ford",
                    price: 56,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordF-152008",
                    name: "Ford F-15 2008",
                    type: "trucks",
                    brand: "Ford",
                    price: 55,
                    score: 5,
                    trips: 11,
                }, {
                    image: "ToyotaTacoma2022",
                    name: "Toyota Tacoma 2022",
                    type: "trucks",
                    brand: "Toyota",
                    price: 50,
                    score: 5,
                    trips: 11,
                },

                // cars
                {
                    image: "NissanVersa2018",
                    name: "Nissan Versa 2018",
                    type: "car",
                    brand: "Nissan",
                    price: 39,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordFusionEnergi2016",
                    name: "Ford Fusion Energi 2016",
                    type: "car",
                    brand: "Ford",
                    price: 44,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Porsche9112013",
                    name: "Porsche 911 2013",
                    type: "car",
                    brand: "Porsche",
                    price: 189,
                    score: 5,
                    trips: 11,
                }, {
                    image: "TeslaModel32022",
                    name: "Tesla Model 3 2022",
                    type: "car",
                    brand: "Tesla",
                    price: 273,
                    score: 5,
                    trips: 11,
                },
                // van
                {
                    image: "FordTransitWagon2017",
                    name: "Ford Transit Wagon 2017",
                    type: "van",
                    brand: "Ford",
                    price: 188,
                    score: 5,
                    trips: 11,
                },
                {
                    image: "FordTransitWagon2015",
                    name: "Ford Transit Wagon 2015",
                    type: "van",
                    brand: "Ford",
                    price: 172,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Ram2500Pomaster2021",
                    name: "Ram 2500 Pomaster 2021",
                    type: "van",
                    brand: "Ram",
                    price: 314,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordTransit-350Wagon2019",
                    name: "Ford Transit-350 Wagon 2019",
                    type: "van",
                    brand: "Ford",
                    price: 540,
                    score: 5,
                    trips: 11,
                },
                // minivan
                {
                    image: "Hondaodyssey2008",
                    name: "Honda odyssey 2008",
                    type: "minivan",
                    brand: "Honda",
                    price: 58,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Hondaodyssey2011",
                    name: "Honda odyssey 2011",
                    type: "minivan",
                    brand: "Honda",
                    price: 63,
                    score: 5,
                    trips: 11,
                },
                {
                    image: "ToyotaSienna2015",
                    name: "Toyota Sienna 2015",
                    type: "minivan",
                    brand: "Toyota",
                    price: 60,
                    score: 5,
                    trips: 11,
                }, {
                    image: "ToyotaSienna2016",
                    name: "Toyota Sienna 2016",
                    type: "minivan",
                    brand: "Toyota",
                    price: 54,
                    score: 5,
                    trips: 11,
                },
                // SUV
                {
                    image: "NissanKicks2021",
                    name: "Nissan Kicks 2021",
                    type: "suv",
                    brand: "Nissan",
                    price: 41,
                    score: 5,
                    trips: 11,
                }, {
                    image: "TeslaModelY2022",
                    name: "Tesla Model Y 2022",
                    type: "suv",
                    brand: "Tesla",
                    price: 211,
                    score: 5,
                    trips: 11,
                }, {
                    image: "BMWX12015",
                    name: "BMW X1 2015",
                    type: "suv",
                    brand: "BMW",
                    price: 159,
                    score: 5,
                    trips: 11,
                }, {
                    image: "KiaSeltos2023",
                    name: "Kia Seltos 2023",
                    type: "suv",
                    brand: "Kia",
                    price: 54,
                    score: 5,
                    trips: 11,
                },
            ]
        )

        let finallCars = ref(
            [

                // trucks
                {
                    image: "DodgeRam15002019",
                    name: "Dodge Ram 1500 2019",
                    type: "trucks",
                    brand: "Ram",
                    price: 63,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordF-152017",
                    name: "Ford F-15 2017",
                    type: "trucks",
                    brand: "Ford",
                    price: 56,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordF-152008",
                    name: "Ford F-15 2008",
                    type: "trucks",
                    brand: "Ford",
                    price: 55,
                    score: 5,
                    trips: 11,
                }, {
                    image: "ToyotaTacoma2022",
                    name: "Toyota Tacoma 2022",
                    type: "trucks",
                    brand: "Toyota",
                    price: 50,
                    score: 5,
                    trips: 11,
                },

                // cars
                {
                    image: "NissanVersa2018",
                    name: "Nissan Versa 2018",
                    type: "car",
                    brand: "Nissan",
                    price: 39,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordFusionEnergi2016",
                    name: "Ford Fusion Energi 2016",
                    type: "car",
                    brand: "Ford",
                    price: 44,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Porsche9112013",
                    name: "Porsche 911 2013",
                    type: "car",
                    brand: "Porsche",
                    price: 189,
                    score: 5,
                    trips: 11,
                }, {
                    image: "TeslaModel32022",
                    name: "Tesla Model 3 2022",
                    type: "car",
                    brand: "Tesla",
                    price: 273,
                    score: 5,
                    trips: 11,
                },
                // van
                {
                    image: "FordTransitWagon2017",
                    name: "Ford Transit Wagon 2017",
                    type: "van",
                    brand: "Ford",
                    price: 188,
                    score: 5,
                    trips: 11,
                },
                {
                    image: "FordTransitWagon2015",
                    name: "Ford Transit Wagon 2015",
                    type: "van",
                    brand: "Ford",
                    price: 172,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Ram2500Pomaster2021",
                    name: "Ram 2500 Pomaster 2021",
                    type: "van",
                    brand: "Ram",
                    price: 314,
                    score: 5,
                    trips: 11,
                }, {
                    image: "FordTransit-350Wagon2019",
                    name: "Ford Transit-350 Wagon 2019",
                    type: "van",
                    brand: "Ford",
                    price: 540,
                    score: 5,
                    trips: 11,
                },
                // minivan
                {
                    image: "Hondaodyssey2008",
                    name: "Honda odyssey 2008",
                    type: "minivan",
                    brand: "Honda",
                    price: 58,
                    score: 5,
                    trips: 11,
                }, {
                    image: "Hondaodyssey2011",
                    name: "Honda odyssey 2011",
                    type: "minivan",
                    brand: "Honda",
                    price: 63,
                    score: 5,
                    trips: 11,
                },
                {
                    image: "ToyotaSienna2015",
                    name: "Toyota Sienna 2015",
                    type: "minivan",
                    brand: "Toyota",
                    price: 60,
                    score: 5,
                    trips: 11,
                }, {
                    image: "ToyotaSienna2016",
                    name: "Toyota Sienna 2016",
                    type: "minivan",
                    brand: "Toyota",
                    price: 54,
                    score: 5,
                    trips: 11,
                },
                // SUV
                {
                    image: "NissanKicks2021",
                    name: "Nissan Kicks 2021",
                    type: "suv",
                    brand: "Nissan",
                    price: 41,
                    score: 5,
                    trips: 11,
                }, {
                    image: "TeslaModelY2022",
                    name: "Tesla Model Y 2022",
                    type: "suv",
                    brand: "Tesla",
                    price: 211,
                    score: 5,
                    trips: 11,
                }, {
                    image: "BMWX12015",
                    name: "BMW X1 2015",
                    type: "suv",
                    brand: "BMW",
                    price: 159,
                    score: 5,
                    trips: 11,
                }, {
                    image: "KiaSeltos2023",
                    name: "Kia Seltos 2023",
                    type: "suv",
                    brand: "Kia",
                    price: 54,
                    score: 5,
                    trips: 11,
                },
            ]
        )

        let sort = ref("")
        let types = ref([])
        let finaltypecar = ref([])
        let brands = ref([])
        let finalbrandcar = ref([])
        let selectedBrands = ref([])
        let selecteType = ref([])


        onMounted(() => {
            getBrands()
            getTypes()
        })


        // sorting
        function sorting() {

            if (sort.value === 'low') {
                finallCars.value.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });
            }
            if (sort.value === 'high') {
                finallCars.value.sort(function(a, b) {
                    return parseFloat(b.price) - parseFloat(a.price);
                });
            }

        }


        // type filtering
        function getTypes() {
            let type = []
            for (let i = 0; i < cars.length; i++) {
                type.push(cars[i].type)
            }
            types.value = [...new Set(type)];
            console.log(types.value);
        }

        function typeFilter() {
            selecteType.value = []

            // get selected items
            let typeInputs = document.getElementsByClassName("car-type")

            for (let i = 0; i < typeInputs.length; i++) {
                if (typeInputs[i].checked) {
                    selecteType.value.push(typeInputs[i].value)
                    console.log(selecteType.value);
                }
            }

            // filter cars
            let x = []

            for (let i = 0; i < cars.length; i++) {
                if (selecteType.value.includes(cars[i].type)) {
                    x.push(cars[i])
                }
            }
            finaltypecar.value = x

            if (finalbrandcar.value.length > 0) {

                let intersection = finaltypecar.value.filter(element => finalbrandcar.value.includes(element));
                console.log(intersection);
                finallCars.value = intersection
            } else {
                finallCars.value = x
            }


            if (selecteType.value.length === 0) {
                finallCars.value = finalbrandcar.value
            }

            if (selectedBrands.value.length === 0 && selecteType.value.length === 0) {
                finallCars.value = cars
            }

        }


        // brand filtering
        function getBrands() {
            let brand = []
            for (let i = 0; i < cars.length; i++) {
                brand.push(cars[i].brand)
            }
            brands.value = [...new Set(brand)];
            console.log(brands.value);
        }

        function brandFilter() {
            selectedBrands.value = []

            // get selected items
            let brandInputs = document.getElementsByClassName("car-brand")
            for (let i = 0; i < brandInputs.length; i++) {
                if (brandInputs[i].checked) {
                    selectedBrands.value.push(brandInputs[i].value)
                    console.log(selectedBrands.value);
                }
            }

            // filter cars
            let x = []
            for (let i = 0; i < cars.length; i++) {
                if (selectedBrands.value.includes(cars[i].brand)) {
                    x.push(cars[i])
                }
            }
            finalbrandcar.value = x

            if (finaltypecar.value.length > 0) {
                let intersection = finalbrandcar.value.filter(element => finaltypecar.value.includes(element));
                console.log(intersection);
                finallCars.value = intersection
            } else {
                finallCars.value = x

            }


            if (selectedBrands.value.length === 0) {
                finallCars.value = finaltypecar.value
            }


            if (types.value.length === 0 && selectedBrands.value.length === 0) {
                finallCars.value = cars
            }

        }

        return {
            finallCars,
            cars,
            sort,
            sorting,
            typeFilter,
            brandFilter,
            getBrands,
            brands,
            selectedBrands,
            finaltypecar,
            finalbrandcar,
            getTypes,
            selecteType,
            types,
        }
    }
}