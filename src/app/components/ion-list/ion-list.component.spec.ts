import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonListComponent } from './ion-list.component';

describe('IonListComponent', () => {
	let component: IonListComponent;
	let fixture: ComponentFixture<IonListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ declarations: [IonListComponent] }).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(IonListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
