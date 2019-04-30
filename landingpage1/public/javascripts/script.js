var vue = new Vue({
    el: "#widgetApp1",
    data: () => {
        return {
            zipCode: "",
            persons: "",
            days: "",
            carType: "",
            email: "",
            submitStatus: false,
            submitMsg: "",
            saveInputs: {
                persons: [],
                numPersons: [],
                days: [],
                carType: [],
                email: []
            },
            submits: {
                customer: []
            }
        }
    },
    methods: {
        saveSubmit: function() {
            this.submits.customer.push({
                Option: this.persons,
                Forfait: this.days,
                Voiture: this.carType,
                Email: this.email
            });
            this.submitStatus = true;
            this.submitMsg = "Nous reviendrons vers vous avec votre devis rapidement.";
        }
    },
    watch: {
        persons(value) {
            this.saveInputs.persons.push(value);
        },
        days(value) {
            this.saveInputs.days.push(value);
        },
        carType(value) {
            this.saveInputs.carType.push(value);
        }
    }
});
