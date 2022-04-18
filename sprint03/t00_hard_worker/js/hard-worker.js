class HardWorker {
    name;
    age_name;
    salary_name;

    set age (age_name) {
        if (age_name >= 1 && age_name < 100) {
            this.age_name = age_name;
        }
    }

    set salary (salary_name) {
        if (salary_name >= 100 && salary_name < 10000) {
            this.salary_name = salary_name;
        }
    }

    toObject() {
        return `Object {name: "${this.name}", age: "${this.age_name}", salary: "${this.salary_name}"`
    }
};
