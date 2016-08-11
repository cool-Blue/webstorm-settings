define( // jshint ignore:line
            it('calls asynchronously emits ${eventName} after logging is complete', function(done) {
                const testLog = LogEvents().logger();
                var cb = sinon.spy(completed);

                testLog(content);   // lexical placement should not matter

                testLog.on${eventName}(cb);

                testLog(content);

                function completed() {

                    if(cb.callCount < ${calls})
                        return;

                    expect(cb).to.have.been.calledTwice;
                    expect(cb).to.have.been.calledOn(${calledOn});
                    expect(cb).to.have.been.${argumentsAssertion}(${arguments});

                    done()
                }
            });
);  // jshint ignore:line