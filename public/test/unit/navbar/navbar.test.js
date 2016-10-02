describe('hfc-navbar', function() {
    
    var $compile, scope;

    beforeEach(module('hfc'));
    beforeEach(module('navbar/navbar.view.html'));

    beforeEach(inject(function(_$compile_, $rootScope, _$httpBackend_, _$location_) {
        $compile = _$compile_;
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $location = _$location_;
    }));

    describe('initialise', function() {

        function setupElement(element) {
            var returnElement = $compile(element)(scope);
            scope.$digest();
            return returnElement;
        }

        it('should correctly set the activeMenuItemId to navbar-home if the $location.url returns \'/\'', function() {
            spyOn($location, 'url').and.returnValue('/');
            var element = setupElement("<hfc-navbar></hfc-navbar>");
            var activeMenuId = element.isolateScope().activeMenuId;
            expect(activeMenuId).toBe('navbar-home');
        });
        it('should correctly set the activeMenuItemId to navbar-home if the $location.url returns \'/about\'', function() {
            spyOn($location, 'url').and.returnValue('/about');
            var element = setupElement("<hfc-navbar></hfc-navbar>");
            var activeMenuId = element.isolateScope().activeMenuId;
            expect(activeMenuId).toBe('navbar-about');
        });
        it('should correctly set the activeMenuItemId to navbar-contact if the $location.url returns \'/contact\'', function() {
            spyOn($location, 'url').and.returnValue('/contact');
            var element = setupElement("<hfc-navbar></hfc-navbar>");
            var activeMenuId = element.isolateScope().activeMenuId;
            expect(activeMenuId).toBe('navbar-contact');
        });
    });
});