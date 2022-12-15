import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(async () => {
    MockBuilder(AppComponent);
  });

  it('should create', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture).toBeTruthy();
  });
});
