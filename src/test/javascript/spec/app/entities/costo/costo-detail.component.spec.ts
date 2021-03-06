/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SistemaAguaPotableTestModule } from '../../../test.module';
import { CostoDetailComponent } from '../../../../../../main/webapp/app/entities/costo/costo-detail.component';
import { CostoService } from '../../../../../../main/webapp/app/entities/costo/costo.service';
import { Costo } from '../../../../../../main/webapp/app/entities/costo/costo.model';

describe('Component Tests', () => {

    describe('Costo Management Detail Component', () => {
        let comp: CostoDetailComponent;
        let fixture: ComponentFixture<CostoDetailComponent>;
        let service: CostoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SistemaAguaPotableTestModule],
                declarations: [CostoDetailComponent],
                providers: [
                    CostoService
                ]
            })
            .overrideTemplate(CostoDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CostoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CostoService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Costo(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.costo).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
