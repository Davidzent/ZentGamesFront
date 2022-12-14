/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { LabelInputComponent } from "./label-input.component";

describe("LabelInputComponent", () => {
    let component: LabelInputComponent;
    let fixture: ComponentFixture<LabelInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LabelInputComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LabelInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
