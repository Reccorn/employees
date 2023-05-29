import { fakerRU as faker } from "@faker-js/faker";

export interface Person {
	_id: string;
	fullname: string;
	sex: string;
	jobArea: string;
	jobDescriptor: string;
	jobTitle: string;
	zodiacSign: string;
	phoneNumber: string;
}

export function getData(length: number) {
	const data = [];

	function createRandomPerson(): Person {
		return {
			_id: faker.string.uuid(),
			fullname: faker.person.fullName(),
			sex: faker.person.sex(),
			jobArea: faker.person.jobArea(),
			jobDescriptor: faker.person.jobDescriptor(),
			jobTitle: faker.person.jobTitle(),
			zodiacSign: faker.person.zodiacSign(),
			phoneNumber: faker.phone.number("+7 9## ### ## ##"),
		};
	}

	for (let i = 0; i < length; i++) {
		data.push(createRandomPerson());
	}

	return data;
}
